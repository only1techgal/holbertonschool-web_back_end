#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skips the header row
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {i: dataset[i] for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Provides deletion-resilient pagination.

        Args:
            index (int): The current start index.
            page_size (int): The number of items per page.

        Returns:
            Dict: A dictionary with pagination metadata and the data.
        """
        # Validates index
        assert index is not None, "Index must not be None"
        assert isinstance(index, int) and index >= 0, "Index must be a non-negative integer"
        indexed_dataset = self.indexed_dataset()
        assert index < len(indexed_dataset), "Index out of range"

        data = []
        current_index = index
        count = 0

        # Collects page data while skipping over deleted entries
        while count < page_size and current_index < len(self.__indexed_dataset):
            if current_index in self.__indexed_dataset:
                data.append(self.__indexed_dataset[current_index])
                count += 1
            current_index += 1

        # Finds the next valid index
        next_index = current_index if current_index < len(self.__indexed_dataset) else None

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index
        }
