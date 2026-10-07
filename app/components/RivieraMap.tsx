"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { localePath, type Locale } from "../i18n/config";
import { getMessages, type MessagesForLocale } from "../i18n/messages";
import type { ExperiencePhoto } from "../lib/experience-photos";

const cannesPhotos = [
  { fileName: "la-croisette.jpg", src: "/images/destinations/cannes/la-croisette.jpg", alt: "La Croisette in Cannes on the French Riviera", objectPosition: "60% 50%" },
  { fileName: "le-suquet.jpg", src: "/images/destinations/cannes/le-suquet.jpg", alt: "Le Suquet old town in Cannes", objectPosition: "65% 50%" },
  { fileName: "marche-forville.jpg", src: "/images/destinations/cannes/marche-forville.jpg", alt: "Marché Forville in Cannes", objectPosition: "50% 50%" },
];

const lerinsPhotos = [
  { fileName: "boat-arrival.jpg", src: "/images/destinations/iles-de-lerins/boat-arrival.jpg", alt: "Boat arriving at the Lérins Islands from Cannes", objectPosition: "20% 50%" },
  { fileName: "saint-honorat-monastery.jpg", src: "/images/destinations/iles-de-lerins/saint-honorat-monastery.jpg", alt: "Monastery of Saint-Honorat on the Lérins Islands", objectPosition: "55% 50%" },
  { fileName: "mediterranean-coastal-trail.jpg", src: "/images/destinations/iles-de-lerins/mediterranean-coastal-trail.jpg", alt: "Mediterranean coastal trail on the Lérins Islands", objectPosition: "50% 50%" },
];

const esterelPhotos = [
  { fileName: "la-napoule-coastal-trail.jpg", src: "/images/destinations/esterel/la-napoule-coastal-trail.jpg", alt: "Coastal trail and Château de la Napoule on the Mediterranean", objectPosition: "40% 50%" },
  { fileName: "pic-du-cap-roux.jpg", src: "/images/destinations/esterel/pic-du-cap-roux.jpg", alt: "Pic du Cap Roux red rocks overlooking the Mediterranean in the Estérel", objectPosition: "50% 50%" },
  { fileName: "cap-dramont-coastal-trail.jpg", src: "/images/destinations/esterel/cap-dramont-coastal-trail.jpg", alt: "Cap Dramont coastal trail with red volcanic rocks, pines and blue Mediterranean water", objectPosition: "55% 50%" },
];

export default function RivieraMap({
  copy,
  locale,
  destinationPhotos,
}: {
  copy: MessagesForLocale["map"];
  locale: Locale;
  destinationPhotos: Record<string, ExperiencePhoto[]>;
}) {
  const destinations = copy.destinations;
  const [selectedId, setSelectedId] = useState<string>(destinations[0].id);
  const selected =
    destinations.find((destination) => destination.id === selectedId) ??
    destinations[0];
  const selectedSubtitle =
    "subtitle" in selected ? selected.subtitle : undefined;
  const destinationGallery = selected.id === "cannes" ? cannesPhotos : selected.id === "iles-de-lerins" ? lerinsPhotos : selected.id === "esterel" ? esterelPhotos : undefined;
  const photos = destinationGallery ?? destinationPhotos[selected.id] ?? [];
  const experienceItems = getMessages(locale).experiences.items;
  const availableExperiences = selected.experiences
    .map((slug) =>
      experienceItems.find((item) => "slug" in item && item.slug === slug),
    )
    .filter((item) => item !== undefined && "slug" in item);
  const discoverHref = localePath(
    locale,
    `/destinations/${selected.id}`,
  );

  return (
    <section className="riviera-map-section" id="riviera-map">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>
              {copy.titleFirst} <em>{copy.titleSecond}</em>
            </h2>
          </div>
          <p className="section-intro">{copy.introduction}</p>
        </div>

        <div className="map-layout">
          <div
            aria-label={copy.ariaLabel}
            className="map-canvas"
          >
            <svg
              aria-label={copy.drawingAlt}
              className="map-drawing"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              viewBox="0 0 900 540"
            >
              <defs>
                <pattern
                  id="mapHatch"
                  width="9"
                  height="9"
                  patternTransform="rotate(35)"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="9"
                    stroke="#d7d7c7"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <path
                className="map-land"
                d="M0 0h900v304c-62-21-102-43-142-51-48-10-81 12-123-2-41-13-53-55-98-55-52 0-63 34-108 29-43-5-63-47-113-34-44 12-57 45-100 45-41 1-70-30-113-17C60 231 37 260 0 266V0Z"
              />
              <path
                className="map-contour"
                d="M24 160c95-67 150-72 225-30s117 26 186-23 139-35 205 5 128 26 230-13M-10 191c96-61 159-59 235-16s120 22 191-24 135-28 205 11 127 26 223-11M38 110c84-57 139-57 211-16s112 20 180-28 137-35 206 4 133 27 239-20"
              />
              <path
                className="map-road"
                d="M62 348c96-40 124-90 221-78 94 12 121 68 206 54 85-13 100-74 185-72 66 1 107 46 174 48"
              />
              <path
                className="map-road-secondary"
                d="M249 270c33 68 18 102-15 142m278-87c-40-8-69 16-87 66m166-138c22 31 49 43 84 45"
              />
              <path
                className="map-island"
                d="M119 426c31-17 53-13 75-2m-66 17c22-12 38-10 54-3m44 32c23-13 43-11 62-3"
              />
              <path
                className="map-gridline"
                d="M0 320h900M300 0v540M600 0v540"
              />
              <text className="map-sea-label" x="505" y="440">
                {copy.seaLabel}
              </text>
            </svg>
            {destinations.map((destination) => (
              <button
                aria-pressed={selectedId === destination.id}
                className={`map-marker${selectedId === destination.id ? " is-selected" : ""}`}
                key={destination.id}
                onClick={() => setSelectedId(destination.id)}
                style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
                type="button"
              >
                <span aria-hidden="true" className="map-marker-dot" />
                <span className="map-marker-label">{destination.name}</span>
              </button>
            ))}
            <span aria-hidden="true" className="map-north">
              {copy.north} <span>↑</span>
            </span>
          </div>
          <aside
            aria-live="polite"
            className="map-detail"
            key={selected.id}
          >
            <div className="map-detail-gallery">
              {photos.map((photo, index) => (
                <figure
                  className={`map-detail-photo map-detail-photo-${index + 1}`}
                  key={photo.fileName}
                >
                  <Image
                    alt={destinationGallery ? destinationGallery[index].alt : copy.photoAlt}
                    style={destinationGallery ? { objectPosition: destinationGallery[index].objectPosition } : undefined}
                    fill
                    sizes="(max-width: 780px) 90vw, 30vw"
                    src={photo.src}
                  />
                </figure>
              ))}
            </div>
            <p className="eyebrow">
              {selectedSubtitle ? copy.fayenceEyebrow : copy.placeEyebrow}
            </p>
            <h3>{selected.name}</h3>
            {selectedSubtitle && (
              <p className="map-detail-subtitle">{selectedSubtitle}</p>
            )}
            <p className="map-detail-description">{selected.detail}</p>
            <span className="map-detail-coordinates">{selected.region}</span>
            <div className="map-detail-experiences">
              <p className="eyebrow">{copy.availableExperiences}</p>
              {availableExperiences.map((experience) => (
                <Link
                  href={localePath(
                    locale,
                    `/experiences/${experience.slug}`,
                  )}
                  key={experience.slug}
                >
                  {experience.title}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
            <Link className="map-detail-cta" href={discoverHref}>
              {copy.discover} {selected.name}
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
        <div
          aria-label={copy.destinationsLabel}
          className="map-destination-list"
        >
          {destinations.map((destination) => (
            <button
              aria-pressed={selectedId === destination.id}
              key={destination.id}
              onClick={() => setSelectedId(destination.id)}
              type="button"
            >
              {destination.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
