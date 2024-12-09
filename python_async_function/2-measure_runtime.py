#!/usr/bin/env python3
"""
This module contains a function `measure_time` that measures the
execution time of the `wait_n` coroutine from a previous implementation.
"""

import time
import asyncio
from concurrent_coroutines import wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for `wait_n(n, max_delay)`
    and returns the average time per call.

    Args:
        n (int): The number of coroutines to run concurrently.
        max_delay (int): The maximum delay for each coroutine.

    Returns:
        float: The average execution time per coroutine.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
