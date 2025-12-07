"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const boxes = gsap.utils.toArray<Element>(scrollRef?.current?.children || []);

        boxes.forEach(box => {
            gsap.to(box, {
                x: 150 * boxes.indexOf(box) +5,
                rotation: 360,
                borderRadius: "100%",
                scroll: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: "bottom bottom",
                    end: "top 10%",
                    scrub: true
                },
                ease: "power1.inOut"
            })
        })
    }, {scope: scrollRef})

  return (
    <div className="flex flex-col p-20 gap-10">
      <h1 className="text-center font-bold text-3xl">GSAP Stagger</h1>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>

      <div className="flex gap-5 mx-auto" ref={scrollRef}>
        <div className="w-20 h-20 bg-amber-300 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-700 rounded-lg amber-boxes" />
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quidem quo suscipit? Dicta nulla natus fuga eum aliquam odit ex quam
        distinctio quasi. Labore dolorum eum ex ea reiciendis libero? Tempore
        ullam quibusdam reiciendis quas illum fugiat officia magnam iste,
        nesciunt eos veniam blanditiis delectus quod quo rem quasi nemo
        asperiores sint suscipit molestiae neque mollitia magni possimus labore.
        Harum perspiciatis veniam eveniet! Vero necessitatibus corrupti tempore
        porro voluptate repellat esse recusandae. Modi beatae tempora nesciunt
        rerum perferendis ratione commodi velit aliquid temporibus. Tenetur
        labore modi quibusdam ab dolore provident itaque, similique delectus
        ratione id nesciunt odit corrupti, recusandae magni?
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
