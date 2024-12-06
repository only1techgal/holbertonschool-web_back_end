#!/usr/bin/env python3
"""
Module 2-floor
This module contains a single function, `floor`,
which returns the floor of a given float.
"""


import math


def floor(n: float) -> int:
    """
    Calculate the floor of a float.

    Parameters:
    n (float): The number to be floored.

    Returns:
    int: The largest integer less than or equal to `n`.
    """
    return math.floor(n)
