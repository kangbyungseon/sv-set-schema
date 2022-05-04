type DriveType = "HDD" | "SSD";

type Drive = {
  driveId: string; // QRCODE value
  type: DriveType;
  location: string;
  capacity: number; // string 또는 number 단위 고민
  usedCapacity: number; // string 또는 number 단위 고민
  manufacturer: string;
  isDiscard: boolean;

  rawDatas?: RawData[];
};
