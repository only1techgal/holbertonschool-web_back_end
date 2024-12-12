#!/usr/bin/env python3
"""
This module provides functionality for paginating a database of popular baby names.

Classes:
    Server: A class to paginate and provide hypermedia-style pagination for a dataset.

Functions:
    index_range(page, page_size): Calculate the start and end index for a given page and page size.
"""

import csv
import math
from typing import List, Dict


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculates the start and the end index for a given pagination setup.

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
        """
        Cached dataset loader.

        Returns:
            List[List]: A list of rows representing the dataset.
        """
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
            List[List]: A list of rows corresponding to the requested page.
                        If the page is out of range, an empty list is returned.

        Raises:
            AssertionError: If page or page_size are not integers greater than 0.
        """
        # Validates arguments
        assert isinstance(page, int) and page > 0, "Page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "Page size must be a positive integer"

        # Gets the start and end indices for the requested page
        start, end = index_range(page, page_size)

        # Retrieves and return the requested slice of the dataset
        dataset = self.dataset()
        return dataset[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Provides hypermedia pagination.

        Args:
            page (int): The page number (1-indexed).
            page_size (int): The number of items per page.

        Returns:
            Dict: A dictionary with pagination metadata and the data.
        """
        # Gets the data for the current page
        data = self.get_page(page, page_size)

        # Calculates total pages
        dataset = self.dataset()
        total_pages = math.ceil(len(dataset) / page_size) if dataset else 0

        # Determines the next and previous pages
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        # Creates the pagination dictionary
        return {
            "page_size": len(data),  # Size of the current page
            "page": page,           # Current page number
            "data": data,           # Data for the current page
            "next_page": next_page, # Next page number or None
            "prev_page": prev_page, # Previous page number or None
            "total_pages": total_pages,  # Total number of pages
        }
