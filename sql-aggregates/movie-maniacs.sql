SELECT    "c"."firstName" || ' ' || "c"."lastName" AS "Customer",
          SUM("p"."amount") AS "totalPaid"
FROM      "rentals" AS "r"
JOIN      "payments" AS "p"
  ON      "p"."rentalId" = "r"."rentalId"
JOIN      "customers" AS "c"
  ON      "r"."customerId" = "c"."customerId"
GROUP BY  "Customer"
ORDER BY  "totalPaid" DESC;
