#!/usr/bin/env python3

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
