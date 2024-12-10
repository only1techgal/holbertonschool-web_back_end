#!/usr/bin/env python3
"""
This module provides an asynchronous generator function.

The function async_generator asynchronously generates 10 random numbers
between 0 and 10, yielding one number every second. It is useful for
demonstrating asynchronous workflows and handling streamed data.
"""

import asyncio
import random


async def async_generator():
    """
    Asynchronously yields 10 random floating-point numbers between 0 and 10.

    This coroutine uses an asynchronous generator to simulate a delay
    between yielding each value, making it ideal for learning and testing
    async functionality in Python.

    Yields:
        float: A random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)  # Asynchronously waits for 1 second
        yield random.uniform(0, 10)  # Random float between 0 and 10
