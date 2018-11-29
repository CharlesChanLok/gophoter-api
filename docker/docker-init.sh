#!/bin/bash
npm install -g knex
yarn install
knex migrate:latest
yarn run dev