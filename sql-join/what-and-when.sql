SELECT    "f"."title",
          "f"."releaseYear",
          "g"."name"
FROM      "films" AS "f"
JOIN      "filmGenre" AS "fg" USING ("filmId")
JOIN      "genres" AS "g" USING ("genreId")
WHERE     "f"."title" = 'Boogie Amelie';
