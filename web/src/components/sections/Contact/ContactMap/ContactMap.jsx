import React, { useRef, useCallback } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./contact-map.scss";

const ContactMap = () => {
  const map = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (map.current) {
      map.current.behaviors.disable("scrollZoom");
    }
  }, [map]);

  const handleClick = useCallback(() => {
    if (map.current) {
      map.current.behaviors.enable("scrollZoom");
    }
  }, [map]);

  return (
    <section
      className="contact-map"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      aria-hidden="true"
    >
      <YMaps>
        <Map
          defaultState={{ center: [55.936696, 37.865148], zoom: 10 }}
          defaultOptions={{
            minZoom: 8,
            maxZoom: 18,
          }}
          className="contact-map__map"
          instanceRef={map}
        >
          <Placemark
            geometry={[55.936696, 37.865148]}
            // properties={{
            //   balloonContentHeader: "MRS House",
            //   balloonContentBody: "Content of the <em>placemark</em> balloon",
            //   balloonContentFooter: "Basement",
            // }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/mrs-map-pin.svg",
              iconImageSize: [42.67, 64],
              iconImageOffset: [-21.3, -64],
              hideIconOnBalloonOpen: false,
            }}
            // modules={["geoObject.addon.balloon"]}
          />
        </Map>
      </YMaps>
    </section>
  );
};

export default ContactMap;
