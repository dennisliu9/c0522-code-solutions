SELECT    "a"."firstName",
          "a"."lastName"
FROM      "films" AS "f"
JOIN      "castMembers" AS "cm" USING ("filmId")
JOIN      "actors" AS "a" USING ("actorId")
WHERE     "f"."title" = 'Jersey Sassy';
