type JobType = "standardization" | "validation" | "extraction";
type JobStatus = "ready" | "progress" | "done" | "error";
type JobPriority = "lowest" | "low" | "medium" | "high" | "highest";
type ValidationMode = "Video" | "CCAN" | "DGPS";
type ExtractionVersion = "1.0" | "2.0" | "2.1";

type Job = {
  jobId: Id;
  type: JobType;
  status: JobStatus;
  priority: JobPriority;
  validationModes: ValidationMode[];
  extractionVersion: ExtractionVersion;

  rawDatas?: RawData[];
};
