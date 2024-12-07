#!/usr/bin/env python3
from typing import Iterable, Sequence, List, Tuple

"""
This module contains a function to calculate the length of elements
in an iterable of sequences.
"""


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Computes the length of each sequence in an iterable.

    This function takes an iterable of sequences (e.g., strings, lists, tuples)
    and returns a list of tuples. Each tuple contains a sequence from the input
    and its corresponding length.

    Args:
        lst (Iterable[Sequence]): An iterable containing sequences.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples where each tuple contains
        a sequence from the input and its length.
    """
    return [(i, len(i)) for i in lst]
