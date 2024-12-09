#!/usr/bin/env python3
"""
This module contains a single asynchronous coroutine `wait_random`.
The function takes an integer `max_delay` as an argument and waits for
a random delay between 0 and `max_delay` seconds before returning the
delay duration.

Example Usage:
    import asyncio
    from 0-basic_async_syntax import wait_random

    print(asyncio.run(wait_random()))
    print(asyncio.run(wait_random(5)))
    print(asyncio.run(wait_random(15)))
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    This is a Asynchronous coroutine that waits for a random delay
    between 0 and max_delay seconds and returns the delay.
    
    Args:
        max_delay (int): The maximum delay duration in seconds.
                         Defaults to 10.

    Returns:
        float: The actual delay duration.
    """

    delay = random.uniform(0, max_delay)  # Float between 0 and max_delay
    await asyncio.sleep(delay)  # Pause for the delay period
    return delay
