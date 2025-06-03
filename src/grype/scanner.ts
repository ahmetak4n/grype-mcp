import { GrypeSchema } from "./model.ts";
import { spawnSync } from "node:child_process";

export const GrypeScan = (scanType: string, scanTarget: string) => {
  const grype = spawnSync("grype", [`${scanTarget}`, "-o", "json" ]);

  const jsonResult = JSON.parse(grype.stdout.toString());
  const grypeResult: GrypeResult[] = [];
 
  jsonResult.matches.forEach((data) => {
    const result: GrypeResult = {
      id: data.vulnerability.id,
      severity: data.vulnerability.severity,
      description: data.vulnerability.description,
    };

    if (data.vulnerability.fix.state === "fixed") {
      var versions = data.vulnerability.fix.versions.toString();
      result.fixAvailable = "fixed " + versions;
    } else {
      result.fixAvailable = "fix not available";
    }

    const paths = data.artifact.locations.map((x) => x.path);
    result.filePath = paths.toString();

    grypeResult.push(result);
  });

  return {
    content: [{
      type: "text",
      text: JSON.stringify(grypeResult, null, 2),
    }]
  };
}
