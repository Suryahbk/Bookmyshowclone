import React from "react";

// component
import Posterplay from "../components/Poster/posterplay.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import StickyFooter from "../components/Footer/footer";

const Events = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Events in Chennai</h2>
            <div className="flex flex-wrap lg:mr-20">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMyBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313611-qnjnyauwzz-portrait.jpg"
                  title="FrontRow Open Mics"
                  subtitle="Free"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323239-jgejmpdtht-portrait.jpg"
                  title="Rooftop Cinema  Carnival"
                  subtitle="₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyOCBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00304004-fldjevbxcv-portrait.jpg"
                  title="Data Science"
                  subtitle="Free"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321793-hfptvqyjkt-portrait.jpg"
                  title="Comedy Killaadees (Tanglish)"
                  subtitle="₹299 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IE1hciBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323252-prvxjbssku-portrait.jpg"
                  title="Alaska Fest"
                  subtitle="₹499 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOSBBcHIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00117372-rveupfcfjq-portrait.jpg"
                  title="Russian Magician Alex Black's Magic Show"
                  subtitle="₹500 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311041-dtnhkzqbah-portrait.jpg"
                  title="Women Slay Sundays"
                  subtitle="₹149 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321722-umvgtczvke-portrait.jpg"
                  title="DiGi Open Mic-Stand UP Comedy"
                  subtitle="₹50 onwards"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4 ml-20">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["English","Hindi","Telugu","Marathi","Sanskrit","Urdu","French","Spanish"]}
              />
               <PlaysFilter
                title="Categories"
                tags={["Workshop","Kids","Comedy Shows","Performances","Online Streaming Events","Music Shows","Vaccination",
                         "Screening","Talks","Celebrity Wishes","Spiritiuality","Meetups"]}
              />
            
               <PlaysFilter
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed", "Amateur","Kids Activites","Outdoor Events"]}
              />
              <PlaysFilter
               title="Price"
               tags={["Free", "0-500", "501-2000","Above 2000"]}
             />
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </>
  );
};

export default Events;