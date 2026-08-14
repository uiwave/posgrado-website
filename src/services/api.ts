// src/services/api.ts
import type {
  ApiResponse,
  TipoProgramaResponse,
  ProgramaResponse,
  PagedModel,
  ProgramaListItemResponse,
} from "../types/api";

const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL || "http://localhost:8080";

async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    // Intentar leer el formato ErrorResponse de tu API
    try {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`,
      );
    } catch {
      throw new Error(
        `Error de red o servidor no disponible (${response.status})`,
      );
    }
  }

  const result: ApiResponse<T> = await response.json();
  return result.data;
}

export const posgradoService = {
  // 0. Obtener Tipo programa por slug
  getTipoProgramaBySlug: (slug: string) =>
    fetchAPI<TipoProgramaResponse>(`/api/open/tipos-programa/${slug}`),

  // 1. Listar todos los tipos de programa
  getTiposPrograma: () =>
    fetchAPI<TipoProgramaResponse[]>("/api/open/tipos-programa"),

  // 2. Obtener programa por slug
  getProgramaBySlug: (slug: string) =>
    fetchAPI<ProgramaResponse>(`/api/open/programas/${slug}`),

  // 3. Listar programas por tipo (con queries opcionales)
  getProgramasPorTipo: (
    slug: string,
    queries?: { q?: string; page?: number; size?: 5 | 10 | 20 },
  ) => {
    const params = new URLSearchParams();
    if (queries?.q) params.append("q", queries.q);
    if (queries?.page !== undefined)
      params.append("page", queries.page.toString());
    if (queries?.size !== undefined)
      params.append("size", queries.size.toString());

    const queryString = params.toString() ? `?${params.toString()}` : "";
    return fetchAPI<PagedModel<ProgramaListItemResponse>>(
      `/api/open/programas/tipo/${slug}${queryString}`,
    );
  },
};
