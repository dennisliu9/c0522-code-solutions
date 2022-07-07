WITH "cteCosts" AS (
  SELECT    "f"."filmId",
            "f"."title",
            "f"."description",
            "f"."rating",
            COUNT(1) * AVG("f"."replacementCost") AS "totalCost"
  FROM      "films"     AS "f"
  JOIN      "inventory" AS "i"
    ON      "i"."filmId" = "f"."filmId"
  GROUP BY  "f"."filmId",
            "f"."title",
            "f"."description",
            "f"."rating"
), "cteRevenues" AS (
  SELECT    "f"."filmId",
            SUM("p"."amount") AS "totalPaid"
  FROM      "rentals"   AS "r"
  JOIN      "inventory" AS "i"
    ON      "r"."inventoryId" = "i"."inventoryId"
  JOIN      "films"     AS "f"
    ON      "f"."filmId" = "i"."filmId"
  JOIN      "payments"  AS "p"
    ON      "p"."rentalId" = "r"."rentalId"
  GROUP BY  "f"."filmId"
)
SELECT    "c"."title",
          "c"."description",
          "c"."rating",
          ("r"."totalPaid" - "c"."totalCost")::DECIMAL(10, 2) AS "totalProfit"
FROM      "cteCosts"    AS "c"
JOIN      "cteRevenues" AS "r"
  ON      "c"."filmId" = "r"."filmId"
ORDER BY  "totalProfit" DESC
LIMIT 5;
