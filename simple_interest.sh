#!/bin/bash

# Function to calculate the simple interest
calculate_simple_interest() {
  principal=$1
  rate=$2
  time=$3

  interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
  echo "Simple Interest: $interest"
}

# Main script starts here
echo "Simple Interest Calculator"
echo "--------------------------"

# Read input from the user
read -p "Enter the principal amount: " principal
read -p "Enter the interest rate (in percentage): " rate
read -p "Enter the time period (in years): " time

# Check if the input is valid (numeric values)
if ! [[ "$principal" =~ ^[0-9]+(\.[0-9]+)?$ ]] || ! [[ "$rate" =~ ^[0-9]+(\.[0-9]+)?$ ]] || ! [[ "$time" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then
  echo "Error: Please enter valid numeric values for principal, rate, and time."
  exit 1
fi

# Calculate and display the simple interest
calculate_simple_interest "$principal" "$rate" "$time"
