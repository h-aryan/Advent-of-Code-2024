# Advent of Code - Day 1 Solution 🎄

This repository contains the solution for **Day 1** of the [Advent of Code 2024](https://adventofcode.com/2024/day/1). The problem involves processing two lists of numbers and performing computations based on their relationships.

## Problem Description

### Part 1

The task is to calculate the **total difference** between two lists of numbers:
- Sort both lists.
- Sum the absolute differences between corresponding elements in the sorted lists.

### Part 2

The goal is to calculate a **similarity score**:
- Count how many times each number in the left list appears in the right list.
- Multiply each number in the left list by its count in the right list.
- Sum up these products to compute the total similarity score.

### Input Format

The input is provided as a text file (`input.txt`), where each line contains two space-separated integers:
- The first number belongs to the left list.
- The second number belongs to the right list.
