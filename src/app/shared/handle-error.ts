import { Observable, of } from 'rxjs';
export const handleErorr = <T>(operation = 'operation', result?: T) =>
  (error: any): Observable<T> => {
    console.log(`${operation} failed: ${error.message}`)
    console.error(error)
    return of(result as T)
  }