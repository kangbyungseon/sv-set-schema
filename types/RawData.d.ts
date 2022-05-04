type ExtractionMode = string;

type Country = "KOR" | "JPN" | "CNA" | "GER";
type Road = "countryside" | "highway" | "city";
type RoadMaterial = "asphalt" | "cement" | "unpaved";
type Weather =
  | "sunny" // 화창한 날
  | "rainy" // 비오는 날
  | "clear" // 맑은 날
  | "cloudy" // 구름낀 날
  | "misty" // 옅은 안개
  | "foggy" // 짙은 안개
  | "gusty" // 돌풍
  | "windy" // 조금 강한 바람
  | "thunder" // 천둥
  | "lightning" // 번개
  | "dry" // 건조한 날
  | "humid"; // 습한 날;
type Platform = "SURF" | "Movon" | "SVM" | "Legacy" | "etc";

type RawData = {
  hddId: Id;
  folderPath: string;
  extractionMode: ExtractionMode; // 명칭 괜찮나?
  meta: RawDataMeta;
  size: number; // GB

  projects?: Project[];
};

type RawDataMeta = {
  date: string;
  startTime: string;
  country: Country;
  vehicle: string;
  vehicleLicense: string;
  cameraPosition: string; // 확인 필요
  cameraSensor: string; // 확인 필요
  platform: Platform;
  road?: Road;
  roadMaterial?: RoadMaterial;
  weather?: Weather;
  isAccident?: boolean;
  isConstruction?: boolean;
};
