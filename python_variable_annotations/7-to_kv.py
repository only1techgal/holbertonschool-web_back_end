#!/usr/bin/env python3
from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Creates a tuple where the first element is the string `k`,
    and the second element is the square of the value `v`.

    Args:
        k (str): A string key.
        v (Union[int, float]): A numeric value (int or float).

    Returns:
        Tuple[str, float]: A tuple with the string and the square of the number as a float.
    """
    return (k, float(v ** 2))
