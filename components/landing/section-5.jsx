import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
const imgs = [
  "https://s3-alpha-sig.figma.com/img/f30a/20c7/93164c02e92df15ac3e046102e4de474?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GlZ9nyWkd6AQTmWymPdtUul5Y6LOo4-coxjq9zZIPpxHl3vZk08WIlUE6LCzP3ax1RDbU9PMbrS3hdRBGmNDePr8eqMolRalAiUpI-iU~HQUpFiC9jFlexS7yRH0MHbuiEEWjAFHiQMRZyd0HWli6W1dlh8sVYh9tUVP6YZkKxNDwKj-tNaQ-AfGJRfC1Aa3zBJnJlpf7TWrzNAyGy5NZfk~0IVcrWsqnTQNvgXm6idFQzOpAYxezuhe45NKJA~bnEdH~-YLe2LDFHx7NoV1s~alBg5KM6Dyf2k9ZaMbRPNXTw6LPjzve1Ny88T~v05TUQOrJJdqS4vVlRT786GD8A__",
  "https://s3-alpha-sig.figma.com/img/36e2/135d/88c8ac0d9f239bc8f2954062c5a5bec9?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jqi6HccBFPeC6oppy9rR8QcIDkRMz0Y8NqTRHW2QHFVGHJKB45bWh5~9hV2mn62j-EC-k10Zh-7ry8OV~wWgTcJCsEVDRJq498rokEnt~VLXZbo5c7ju2HWXZcZt4-9ree0NRSUlKT44jxNh8ClwunlModz-qMVBmHzfoKAqRfrmGM7jm86Ywqb2saHam5b2UyF-t0FXCUrBbmkf4aBpKwvPlyUrlgigRATANs-KEEiEIaxTJAv~vUi0NAUXCPd4Rt4iojo7Ks3onRO93JIHpN0Dq7wt6l7Nc8MKv56ijgLGMtKxEFqLPQMk2PvNnhBv8f1LHY~JpCUNHFD2XAuiwQ__",
  "https://s3-alpha-sig.figma.com/img/79fb/86c9/0de20949b3fa95afaa8ea29a33eadab4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DALWuoMYloqa787c4hHZaLTHvGe3An2QhpzS2AFOw7gdKqokobwPjPBgykgyduQjOuYHDDAnOPtcuLJMAEEKbxhzDf7rtqpoJ3nBpWq2Doy25HTvYsZgwW3KfdZ4hiRWmkRDz6pVvIIPVWfca2FRpr0Xz3VS8zH1dNhG28XoKZKjBDmFuKpvVenSOn--1HYQwO--O56mA56ahBCYDYwwlOpO7cZXoJ3rPKIwh9dm7uz07klGOc118zgwKMA0mMnB7-x3nqPTTHv1~P9HdES0OFG79CTAiELxXHmoHv3~aClhm3o8d-OymIuNG6f7SZRVOgsYciCcz~SBzMJobDLLFQ__",
  "https://s3-alpha-sig.figma.com/img/443e/f560/6a76d7c3a2ec14bd8d4cde62cffd948c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H4Oz55dqLhvM2XoTfH2Lhaov2s38LBzKYRzlI9YBN-H-aaogndTL307vEmvRtmeR-~s0nAVMG~qW6weL0YkHGgyqQsBpHM3nLI55~75ZGVNrRuU2W3JUGX94moXXGaoucJRpWOWTGJ0mSDmYnPBNw7K1B4LEwmrz-y0qoZuPmRVf~ueaoC4J3iAJ~oX4gHtscEqxOl7f2eLSvN-~sLKle1bIxLUDnYJj95Y~3FZY5pIZtooJdZB9ob1BgmufTWnUy3Lw96D4b0VVPVDRoGM3xjHLnpJMy7vTH5f9N0Xa11w-gz7QsTXHC5cK~-XQdwK~fK3px3dLFVkl4a9JxBsmog__",
  "https://s3-alpha-sig.figma.com/img/a64d/4abe/48c7f7575f6d19c1f64726c9a74b457b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SxUXyPNFCmNRzNa0AFUZuD8lguRQqKZOLgSuV4lq2Jv1-cOL4qPckEZ66cU1PQvVIAW25yXVU~7d85dn9SCVmWIb3qKCFexuqkS0aFwElCogOQ2Eaz13x6Z23ygE4vcNGNgSkrT-kk227IQTEzSTClTP5agyfKXjtYma3feRt5k87odWBiUn6a59hoTp8hpLT2jKb0IDhfXfzc9D6v1s7TyaF1U7Fo3zf7hsQgqpsNwVQnxPqD2aEQUNlMgd-H-jMhX0ODl95PzBr~ammyzx3GXOR3D0wI1mJx0eBxPxUEKRwhrimkhCgAdWx9JdJ0CcXYmLraMml53AjIpcZWGeow__",
  "https://s3-alpha-sig.figma.com/img/18b9/444b/f639dd200e47b671704e6f19ce6469bf?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KMlayqzCSkf94aPkSSpuzIt0b8mDnyHg9VeGxiFblTwcSLqxbnbTgr~iYfNKCv9vMF8AypcZcS6O~WediZ-~XK09yxh2HWvC13VsxP6BFr1030mrhCFgB3e1JqNDN7nG3SxgcvRbx60fMQgE2qEmGZqkSPZNM29vaOvl6XyN9cAHEBUoDR7k4eJZQRjRJwsAig0GhGV9vJsSmxyDkiWgrcZ8ewKYDEuznG1Pe8NfW75zpZml8U4F6sot5obDD4BzDgdQSARs~CpU3yqboE6HzpNSkSjBdyQMQTl2mz8HRqVBmBtYoGN2SkvuLtnRbYjur97-r0cvNn9kIYdll~oxTA__",
  "https://s3-alpha-sig.figma.com/img/c7ca/9455/8456caec47a2a67e338006c83a46a508?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mWAxE0QyYDs52WnSo5vMrNb6DeNhNoUftVEkH81Kw4SXmMQaWmljPuMXv8fN2DO49kkdmo9MH1rvT4WCqbOI4VyUPwu4ChIRqGX7z8~XKllcJL0KozzGYQpmwMTl~iLDZ5nOvK7YwNNzKPJl0-OrdlnZqRTtIu2vWUQrqUlvVdR1o91acaE09cIukLohx46yicANw6ELAnTbyeDq6N2kHMycZiR3BwgVVK3n3p5kZM4sdWhNPu--649JYqpXXBB0xFUnTGdFSMlP-AHZqUVCuNGMVSb5FVwIlS6lHQAiqfVHa2azTcwSNY1yPAn9Yr6Msxxpm5J8I0FrQuVaL~HTqQ__",
  "https://s3-alpha-sig.figma.com/img/1da2/53e0/1265b06f410642297ee0f0566d8b7255?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bVz0-DofDfMlj4U7vHhZ5HZfDZ8V-1Egyz97EqhP5v3L8u-vvke0jSKpo6Y0gdM1bQplKglScPeoul~XZ46zYaa38yYZ4CFZ9O8abJcjh5G8WxUev8WTydGvJTeuQr1rnXYYWuFWDzZmFAXkgpPxHgwRFJpMfjPiOYvjgrR~Ry~gKzBpcQLXJs~KpTARf~wRDFIOgA1dlAxnY5LuneO2fx5qc1AKHG2Th8~ug-AjUOfgu1ZUDO3dM3D5OJ4Hb810zOkHgQ2hie6DXmDvSae47G~P1KtZnti3OucM3XwEIx6fSZAtzQIc58QKRwlfUMbYU8Y-vOh-qw7Fh2jIUUncDw__",
  "https://s3-alpha-sig.figma.com/img/e452/4297/1467d105171431ea55f913ba5f4c17dd?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WC4V3gt4Pl~1HieGc~poWOFTj5l8CK9A5Y6us4JR5n2CmMt576kEyGkuK7HiH2U5NHxYanSPfVI9ENfOhxzz9cM4EUIr8ZmDHu8VKay5kgjD~qLZVtO-m-MB1MSBz4ZHTKesG3Q3TKQS6tU62yH8ZSvabCcGNTB6vzprugKpaUSf3PXqDR~zsy4l-G4dgwnXFu~9uWJIuuuP5xnvV-48ij5oTjcda22lwMLQM9g2rubAe~VHdfnFEDzt0Y8QZ16lVxczhvyL4OSdxxO831~8SIECc6Di2ZBdrXYWHXRAcnWLf7ljq2q0c713kht11wx8WgyZOe2ydcvcb5hOqR~poA__",
  "https://s3-alpha-sig.figma.com/img/faed/ee76/6bf1d25b03e555c1d683b5615c2e7fa8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KwisVE2FcVMol5LtM5BpwZgxYskfhylfXuFJ~XTioV7D2QtBMyFL86ISsfe2xuaZ4tXNQ5E5UUxs8VOcvja8FiNQTRdAnHzLdKbq15cf-JYLsCptJy~gAxUIeeWfTE40qKgkCTRo6xPNiu15TEl0swLiIHVXmx4Dq6l2~RLDu2N7kymp1~EJFVK8DO90G-mTfYXQ2YzxV6e2hcXDd7AzaCl70B8gW8UeC5P118khWe3rhlKSiQu~DJ3z4e9Il9STA8IyyxQJ4UJUGV7uRRyZ0HIwWnfUVicImJ1VHZu0RNnl-JefFPfr4709LEfeV8KH5FupfeIrtQG8el4vtl~-yg__",
  "https://s3-alpha-sig.figma.com/img/9390/8dc9/e8c754b2cdc66cb7332bf1379ee24b51?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F30TFyeab1OtqbiqZ601fON7IyEmlrAghDu6xP4hojx4GlTquV0nRxjEQMt6st4fFZhm4sq9iSk3T7594yt9qJR4LMx5n0F-BLYV7OlKouU0aZMsuPKCTv8ruoBRzhLn2M480JcVb9VTmlVNNdwJ9H2bIbLfv4uJ~Dsp-ck1r0wgdGGY4hMdQrYn1zHXkq49lwLXjtxy5N3ptR-8mFPjYlBxa6lCWCrtKYPF6hGgq4XStvnmG3WCmOtbtnka2vV1zoSidwD~9GnwroSSeM3uzl10LdaybeyVYxvQlQuABf9apZLk76BzPUGnxsqfg2IP06pmS952uXqds0is8CBJlA__",
  "https://s3-alpha-sig.figma.com/img/05d3/385d/dcf9342fdef29246d130fb753924364f?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MAA-HoHZdkWwWYveW74iTf3p3U1BsYmjtJjE9g4MTzX~AyG8E0TVKN3y~Z5eJoeHA6SqEluqBGKPaK9DWrr0-96E2DJ5sBboYRVT9ckgWrCJNdNcBAFhYUDPGnbWG9nXirKr99Dl7yzROxNV1RONbtUwb8scVaEuZ4LhSvIzGEhXMzrrnnufurhsnTGEcoPRDsClpw6nMWYLd413BWTk5wXLR77WF9gJnep8WzMLo25MlpeIsDz-OZHa6oWoVyPLDkB86MWLuCmHw99XHO~~7Ta15cuf3YXHuwlnMvqFw2VXo-Pe~l2pNurC6vqOA1lo~FyDvTHnAMvQOm0UsBC3jQ__",
];
export default function Section5({ className }) {
  return (
    <div className={cn("py-20", className)}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-4xl uppercase text-center font-bold pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="flex flex-wrap gap-4 lg:gap-y-3 lg:gap-x-0 justify-center ">
          {imgs.map((img, i) => (
            <div
              key={i}
              className="w-1/4 flex justify-center"
              style={{
                justifyContent: i === 4 ? "start" : i == 7 ? "end" : "center",
              }}
            >
              <motion.img
                src={img}
                className="h-16 w-1h-16 sm:h-24 sm:w-24 object-contain "
                key={i}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
