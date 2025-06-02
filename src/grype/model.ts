import { z } from "zod";

export const Fix = z.object({
  versions: z.array(z.string()),
  state: z.string()
});

export const Artifact = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
  type: z.string(),
  locations: z.array(z.object({
    path: z.string()
  }))
});

export const Vulnerability = z.object({
  id: z.string(),
  dataSource: z.string(),
  severity: z.string(),
  description: z.string(),
  fix: z.object({
    versions: z.array(z.string()),
    state: z.string()
  })
});

export const Match = z.object({
  vulnerability: Vulnerability,
  artifact: Artifact
});

export const GrypeSchema = z.object({
  matches: z.array(Match)
});

export const GrypeResult = z.object({
  id: z.string(),
  severity: z.string(),
  description: z.string(),
  fixAvailable: z.string(),
  filePath: z.string()
});
