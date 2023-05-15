import { render, renderHook, act } from '@testing-library/react-hooks';
import { useTrailStore } from './trail-store';

describe('useTraitStore', () => {
  it('should update selectedCity correctly', () => {
    const { result } = renderHook(() => useTrailStore());

    act(() => {
      result.current.setSelectedCity('New York');
    });

    expect(result.current.selectedCity).toBe('New York');
  });

  it('should update selectedTrail correctly', () => {
    const { result } = renderHook(() => useTrailStore());

    act(() => {
      result.current.setSelectedTrail(1);
    });

    expect(result.current.selectedTrail).toBe(1);
  });
});
