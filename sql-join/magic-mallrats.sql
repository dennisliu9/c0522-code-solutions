SELECT    "c"."firstName",
          "c"."lastName"
FROM      "films" AS "f"
JOIN      "inventory" AS "i" USING ("filmId")
JOIN      "rentals" AS "r" USING ("inventoryId")
JOIN      "customers" AS "c" USING ("customerId")
WHERE     "f"."title" = 'Magic Mallrats';
