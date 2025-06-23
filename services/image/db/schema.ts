import { relations } from "drizzle-orm";
import {
  sqliteTable,
  integer,
  text,
  blob,
  numeric,
} from "drizzle-orm/sqlite-core";

export const images = sqliteTable("images", {
  id: text().unique().primaryKey().notNull(),
  fileData: blob().notNull(),
  hash: text().notNull(),
});

export const metadata = sqliteTable("metadata", {
  id: text().primaryKey().notNull(),
  linkedImage: text().notNull(),
  dateTimeOriginal: numeric(),
  dateTimeDigitized: numeric(),
  copyrightHolderId: text(),
  alt: text(),
  other: blob(),
});

export const tags = sqliteTable("tags", {
  id: text().unique().primaryKey().notNull(),
  name: text(),
});

export const tagsToImages = sqliteTable("tti", {
  id: text().unique().primaryKey().notNull(),
  tagId: text()
    .notNull()
    .references(() => tags.id),
  imageId: text()
    .notNull()
    .references(() => images.id),
});

export const imageRelations = relations(images, ({ one }) => ({
  metadata: one(metadata, {
    fields: [images.id],
    references: [metadata.linkedImage],
  }),
}));

export const tagsToImagesRelations = relations(images, ({ many }) => ({
  tags: many(tagsToImages),
}));
