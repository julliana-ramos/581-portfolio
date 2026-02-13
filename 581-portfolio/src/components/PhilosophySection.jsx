import { Briefcase, Lightbulb, User } from "lucide-react"
import { useState } from "react"
import { Modal } from "@/components/Modal"
import { philosophies } from "@/data/philosophies"

export const PhilosophySection = () => {

    const [selectedPhilosophy, setSelectedPhilosophy] = useState(null);

    return <section id="philosophy" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Philosophy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        With an open mind, you'll find the right design.
                    </h3>
                    <p className="text-muted-foreground">
                        
                    </p>

                    <p className="text-muted-foreground">
                        ***For final submission, this will be around 2 paragraphs of summary for what
                        I learned throughout the course.
                    </p>

                    <p className="text-muted-foreground">
                        Click a card to see what design values, processes, and tools
                        I practiced and passed on throughout each project.
                    </p>

                    
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div
                        className="gradient-border p-6 card-hover cursor-pointer"
                        onClick={() => setSelectedPhilosophy(philosophies[0])}
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Lightbulb className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Sometimes Less Really Isn't More
                                </h4>
                                <p className="text-muted-foreground">
                                    Assignment 1
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="gradient-border p-6 card-hover cursor-pointer"
                        onClick={() => setSelectedPhilosophy(philosophies[1])}
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Assignment 2
                                </h4>
                                <p className="text-muted-foreground">
                                    Assignment 2
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="gradient-border p-6 card-hover cursor-pointer"
                        onClick={() => setSelectedPhilosophy(philosophies[2])}
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Assignment 3
                                </h4>
                                <p className="text-muted-foreground">
                                    Assignment 3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Entire Modal section was generated using ChatGPT. */}
        <Modal
            isOpen={!!selectedPhilosophy}
            title={selectedPhilosophy?.title}
            onClose={() => setSelectedPhilosophy(null)}
        >
            {selectedPhilosophy && (
                <div className="space-y-4">
                    {selectedPhilosophy.content.map((paragraph, i) => (
                        <p
                            key={i}
                            className="text-muted-foreground leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}
        </Modal>
        {/* Entire Modal section was generated using ChatGPT. */}
    </section>
}
