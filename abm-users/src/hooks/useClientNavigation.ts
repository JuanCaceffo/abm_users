import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

/**
 * Custom hook para reutilizar lógica de navegación programática.
 *
 * @typedef {Object} NavigationObject
 * @property {() => URLSearchParams} actualParams - Obtiene los parámetros de búsqueda actuales como un objeto `URLSearchParams` que permite escritura.
 * @property {(params: Record<string, string>) => void} updateParams - Actualiza múltiples parámetros de búsqueda con los valores proporcionados.
 * @property {() => string} actualFullPath - Obtiene el path completo con los parámetros de búsqueda incluidos.
 * @property {(options: NavigateOptions) => void} fullReplace - Reemplaza la URL actual con una nueva incluyendo parámetros y acepta opciones de navegación.
 *
 * @returns {NavigationObject} Un objeto con funciones útiles para la navegación programática.
 * @example
 * const { actualParams, updateParams, actualFullPath, fullReplace } = useClientNavigation();
 *
 * // Para actualizar un parámetro
 * updateParams({ page: '2' });
 *
 * // Para obtener los parámetros actuales
 * const params = actualParams();
 *
 * // Para obtener el path completo
 * const fullPath = actualFullPath();
 *
 * // Para reemplazar la URL actual con opciones
 * fullReplace({ scroll: true });
 */
const useClientNavigation = () => {
  const { replace } = useRouter()
  const path = usePathname()
  const params = useSearchParams()

  //permite obtener objeto SerachParams con permiso de escritura y  parametros actuales
  const actualParams = () => new URLSearchParams(params.toString())

  //Permite actualizar varios parametros
  const updateParams = (params: Record<string, string>) => {
    const newParams = actualParams()

    Object.entries(params).forEach(([paramKey, value]) => {
      newParams.set(paramKey, value)
    })

    return newParams
  }
  //Obtiene el path con search parameters incluído
  const actualFullPath = (URLSearchParams?: URLSearchParams) =>
    `${path}?${URLSearchParams ? URLSearchParams.toString() : ''}`

  const fullReplace = (
    options: NavigateOptions,
    URLSearchParams?: URLSearchParams
  ) => {
    replace(actualFullPath(URLSearchParams), options)
  }

  return {
    actualParams,
    updateParams,
    actualFullPath,
    fullReplace,
  }
}

export default useClientNavigation
