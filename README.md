# CO2 API

This is an API for giving information about co2-impact of different goods and services.

The aim is to provide an endpoint from which it is easy to get information about co2-impact for different things and to enable new services that can help people make co2-conscious decisions in everyday life.

Initially it includes data from mat-klimat-listan, which is a document from 2014 by Elin Röös and lists the mean co2-impact of a broad category of foods, such as meat, grains, and veg (https://pub.epsilon.slu.se/11671/7/roos_e_141125.pdf). With this information it should be easy to connect this with a shopping list and enumerate the co2-impact of the list. It should further make it possible to suggest alernatives in order to decrease the impact if possible.

# Work in progress

This is indeed work in progress. Please help out if you can.

# API

It is all JSON and REST. PR for GraphQL would be sweet, but should iterate more on data format.

## /all

Get a list of all entries.

## /food/:food

Get information about specific food. Check the /all endpoint or the code for available foods. It is the name property in data.js.

## /q?property1=value1[&...&propertyN=valueN]

Perform a query. Any query parameter will filter the result. E.g. /q?name=beef will return all beef entries. /q?country=sweden will result in everything relevant in Sweden. /q?country=sweden&name=candy will result in candy as consumed in Sweden.

# Use it

Currently available here: https://co2.rost.me

Also available as public docker image rrostt/co2 on docker hub.
