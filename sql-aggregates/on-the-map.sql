SELECT    "c"."name" AS "Country",
          COUNT("ct".*) AS "numberOfCities"
FROM      "cities" AS "ct"
JOIN      "countries" AS "c"
  ON      "ct"."countryId" = "c"."countryId"
-- GROUP BY  "c"."name";
GROUP BY  "Country"; -- This also works, very helpful! This doesn't work for SQL Server
