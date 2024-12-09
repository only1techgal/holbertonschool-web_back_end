#!/usr/bin/env python3
"""
This module defines an asynchronous coroutine `wait_n` that spawns
wait_random n times with a specified max_delay and returns a list
of all the delays in ascending order without using `sort()`.
"""

import asyncio
from typing import List
from basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronously spawns `wait_random` n times with the given max_delay
    and returns the list of all the delays in ascending order.

    Args:
        n (int): The number of times to call wait_random.
        max_delay (int): The maximum delay for each call to wait_random.

    Returns:
        List[float]: A list of all the delays in ascending order.
    """
    delays = []
    for _ in range(n):
        delays.append(asyncio.create_task(wait_random(max_delay)))

    completed_tasks = []
    for task in asyncio.as_completed(delays):
        completed_tasks.append(await task)
    return completed_tasks
