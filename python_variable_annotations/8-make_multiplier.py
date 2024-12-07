#!/usr/bin/env python3
"""
This module provides a type-annotated function `make_multiplier`
that returns a callable function to multiply a float by a given multiplier.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies its input by the given multiplier.

    Args:
        multiplier (float): The multiplier to use.

    Returns:
        Callable[[float], float]: A function that takes a float and returns
                                   the product as a float.
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier

    return multiplier_function
