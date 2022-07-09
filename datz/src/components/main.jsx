import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

function Importmainn() {
    const [notes, setNotes] = useState([{
        end_year: '',
        intensity: '',
        sector: '',
        topic: '',
        insight: '',
        url: '',
        region: '',
        start_year: '',
        impact: '',
        added: '',
        published: '',
        country: '',
        relevance: '',
        pestle: '',
        source: '',
        title: '',
        likelihood: '',
    }])
    useEffect(() => {
        fetch("http://localhost:8000/notes").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })
    return (
        <>
            <div className="bg-black  text-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {notes.map(note =>
                            <div class="p-3 bg-gray-800 text-white  overflow-hidden rounded-2xl">
                                <p><b class="text-2xl">{note.topic}</b></p>
                                <br></br>
                                <p><span class="text-sm">intensity:  </span>{note.intensity}</p>
                                <p><span class="text-sm">sector:   </span>{note.sector}</p>
                                <a href={note.url} target="blank" class="underline text-blue-300 hover:text-blue-100" >link to page</a>
                                <p class="font-semibold">{note.country}</p>
                                <p>{note.start_year}-{note.end_year}</p>
                                <div>
                                    <Accordion >
                                        <AccordionItem >
                                            <h2>
                                                <AccordionButton>
                                                    <Box class="bg-gray-700 m-auto px-8 py-2 text-black rounded-xl" flex='1'>
                                                        more
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4} class="p-4 rounded-xl">
                                                <p class="my-1 bg-slate-100 p-1 rounded-xl text-black">relevance: {note.relevance}</p>
                                                <p class="my-1 bg-gray-500 p-1 rounded-xl text-black">pestle: {note.pestle}</p>
                                                <p class="my-1 bg-slate-100 p-1 rounded-xl text-black">source: {note.source}</p>
                                                <p class="my-1 bg-gray-500 p-1 rounded-xl text-black">title: {note.title}</p>
                                                <p class="my-1 bg-slate-100 p-1 rounded-xl text-black">likelihood: {note.likelihood}</p>
                                                <p class="my-1 bg-gray-500 p-1 rounded-xl text-black">published: {note.published}</p>
                                                <p class="my-1 bg-slate-100 p-1 rounded-xl text-black">region: {note.region}</p>
                                                <p class="my-1 bg-gray-500 p-1 rounded-xl text-black">impact: {note.impact}</p>
                                                <p class="my-1 bg-slate-100 p-1 rounded-xl text-black">added: {note.added}</p>
                                                <p class="my-1 bg-gray-500 p-1 rounded-xl text-black">insight: {note.insight}</p>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export { Importmainn };