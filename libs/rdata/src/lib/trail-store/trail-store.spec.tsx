import { renderHook, act } from '@testing-library/react';
import { useTrailStore } from './trail-store';

describe('useTraitStore', () => {
  it('should update selectedCity correctly', () => {
    const { result } = renderHook(() => useTrailStore());
    const city =  {
      id: "5273",
      name: "Tallinn"
    }
    act(() => {
      result.current.setSelectedCity( city);
    });

    expect(result.current.selectedCity.name).toBe('Tallinn');
  });
});
