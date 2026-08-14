export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: number;
}

export interface ErrorResponse {
  success: false;
  message: string;
  status: number;
  timestamp: number;
}

export interface TipoProgramaResponse {
  id: number;
  nombre: string;
  slug: string;
  imagenCard: string;
  imagenHero: string;
  cantidadProgramas: number;
}

export interface NamedEntity {
  id: number;
  nombre: string;
}

export interface Inversion {
  costoMatricula: number;
  cantidadMatriculas: number;
  sumaCostosCursos: number;
  inversionTotal: number;
}

export interface Curso {
  id: number;
  asignatura: NamedEntity;
  creditos: number;
  costo: number;
  categoria: NamedEntity;
}

export interface PlanEstudioPorPeriodo {
  periodo: NamedEntity;
  cursos: Curso[];
}

export interface ProgramaResponse {
  id: number;
  nombre: string;
  slug: string;
  objetivoGeneral: string;
  objetivosEspecificos: string;
  perfilPosgraduado: string;
  costoMatricula: number | null; // <-- Cambiado de number a number | null
  imagen: string;
  modalidad: NamedEntity;
  facultad: NamedEntity;
  tipoPrograma: TipoProgramaResponse;
  inversion: Inversion;
  planEstudios: PlanEstudioPorPeriodo[];
  lineasInvestigacion?: string[];
}

// Reutiliza omitiendo los campos que no vienen en el listado
export type ProgramaListItemResponse = Omit<
  ProgramaResponse,
  "inversion" | "planEstudios"
>;

export interface PageInfo {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

export interface PagedModel<T> {
  content: T[];
  page: PageInfo;
}
