#!/usr/bin/env python3
"""
This module provides a helper function for pagination.

The `index_range` function calculates the start and end indices
corresponding to a page number and page size, making it easier
to retrieve specific slices of data for paginated results.
"""

def index_range(page, page_size):
    """
    Calculate the start and end index for a given pagination setup.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple containing the start index and the end index.
    """

    start = (page - 1) * page_size
    end = start + page_size
    return start, end
