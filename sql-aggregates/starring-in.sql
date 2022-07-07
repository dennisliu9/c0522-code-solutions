SELECT    "g"."name" AS "Genre",
          COUNT("f".*) AS "numberOfFilms"
FROM      "films" AS "f"
JOIN      "filmGenre" AS "fg"
  ON      "f"."filmId" = "fg"."filmId"
JOIN      "genres" AS "g"
  ON      "fg"."genreId" = "g"."genreId"
JOIN      "castMembers" AS "cm"
  ON      "cm"."filmId" = "f"."filmId"
JOIN      "actors" AS "a"
  ON      "cm"."actorId" = "a"."actorId"
WHERE     "a"."firstName" = 'Lisa'
      AND "a"."lastName" = 'Monroe'
GROUP BY  "Genre";
