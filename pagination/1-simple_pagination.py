#!/usr/bin/env python3
"""
This module provides a Server class to paginate a database of popular baby names.
"""

import csv
from typing import List

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

class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip the header row

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieves a page of data from the dataset.

        Args:
            page (int): The page number (1-indexed).
            page_size (int): The number of items per page.

        Returns:
            list: A list of rows corresponding to the requested page.
                  If the page is out of range, an empty list is returned.

        Raises:
            AssertionError: If page or page_size are not integers greater than 0.
        """
        # Validate arguments
        assert isinstance(page, int) and page > 0, "Page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "Page size must be a positive integer"

        # Get the start and end indices for the requested page
        start, end = index_range(page, page_size)

        # Retrieve and return the requested slice of the dataset
        dataset = self.dataset()
        return dataset[start:end] if start < len(dataset) else []
