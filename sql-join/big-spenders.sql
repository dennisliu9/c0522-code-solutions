SELECT    "c"."firstName",
          "c"."lastName",
          "p"."amount"
FROM      "payments" AS "p"
JOIN      "customers" AS "c" USING ("customerId")
ORDER BY  "p"."amount" DESC
LIMIT 10;
