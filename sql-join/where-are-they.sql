SELECT    "a"."line1",
          "cty"."name" AS "cityName",
          "a"."district",
          "c"."name" AS "countryName"
FROM      "addresses" AS "a"
JOIN      "cities" AS "cty" USING ("cityId")
JOIN      "countries" AS "c" USING ("countryId");
