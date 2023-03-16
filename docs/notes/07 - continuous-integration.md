name: PHP Composer

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

permissions:
  contents: read

jobs:
  build:

    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./php

    steps:
    - uses: actions/checkout@v3

    - name: Install dependencies
      run: composer install --prefer-dist --no-progress

    - name: PHPUnit tests
      uses: php-actions/phpunit@v9.6.3
      with :
        configuration: "./php/phpunit.xml.dist"

    # Add a test script to composer.json, for instance: "test": "vendor/bin/phpunit"
    # Docs: https://getcomposer.org/doc/articles/scripts.md

    # - name: Run test suite
    #   run: composer run-script test
