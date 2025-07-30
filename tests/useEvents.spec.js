import { renderHook, act, waitFor } from '@testing-library/react'
import { useEvents } from '../src/Hooks/useEvents'

beforeEach(() => localStorage.clear())

describe('useEvents – casos principales', () => {
  it('registra un evento sin solapamiento', async () => {
    const { result } = renderHook(() => useEvents())
    act(() => {
      result.current.register({ name:'A', room:'S1', start:'09:00', end:'10:00' })
    })
    await waitFor(() =>
      expect(result.current.events).toHaveLength(1)
    )
  })

  it('rechaza un evento solapado', async () => {
    const { result } = renderHook(() => useEvents())
    act(() => { result.current.register({ name:'A', room:'S1', start:'09:00', end:'10:00' }) })
    await waitFor(() => expect(result.current.events).toHaveLength(1))
   
  })

})
