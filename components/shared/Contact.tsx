"use client";
import { Loader2 } from "lucide-react"
import styles from "@/app/styles";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select"
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    work: z.string().min(1, "Please select an option"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

const Contact = () => {
    const { toast } = useToast()
    const [activeState, setActiveState] = useState(false);
    const [loading, setLoading] = useState("hidden");
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            work: "",
            message: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setActiveState(true);
        setLoading("");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "c292b631-b5ca-4aa6-8e88-23883524bd2d",
                ...values
            }),
        });
        const result = await response.json();
        if (result.success) {
            toast({
                className: "bg-green-300 text-black",
                title: "Message Sent Successfully!",
                description: "Thank you for reaching out! Your message has been successfully sent. I will be in touch with you soon.",
            })
            form.reset()
        } else {
            toast({
                variant: "destructive",
                title: "Something Went Wrong",
                description: "We apologize, but there was an issue processing your request. Please try again later or contact support for assistance.",
            })
        }
        setActiveState(false);
        setLoading("hidden")
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-6`}>
                <motion.div variants={itemVariants}>
                    <h1 className="text-start text-5xl font-bold text-gray-800 mb-4">Let&apos;s Connect</h1>
                    <p className="text-lg mb-8 text-slate-500 font-bold">Have a project in mind or just want to chat? I&apos;m always open to new ideas and collaborations.</p>
                </motion.div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                <Label htmlFor="name" className="text-sm font-semibold text-gray-700 block mb-1">
                                                    Name
                                                </Label>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    placeholder="Your name"
                                                    className="py-6 px-4 text-gray-800 bg-white border-gray-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 block mb-1">
                                                    Email
                                                </Label>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    placeholder="Your email"
                                                    className="py-6 px-4 text-gray-800 bg-white border-gray-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="work"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                <Label htmlFor="work" className="text-sm font-semibold text-gray-700 block mb-1">
                                                    What are you looking for?
                                                </Label>
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="py-6 px-4 text-gray-800 bg-white border-gray-300">
                                                        <SelectValue placeholder="Select what you're looking for" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className={"bg-white text-black border-transparent"}>
                                                    <SelectGroup>
                                                        <SelectLabel>Machine Learning</SelectLabel>
                                                        <SelectItem value="ML_Model">Machine Learning Model</SelectItem>
                                                        <SelectItem value="ML_Business_Intelligence">ML for Business Intelligence</SelectItem>
                                                        <SelectItem value="Computer_Vision">Computer Vision</SelectItem>
                                                        <SelectItem value="NLP">Natural Language Processing (NLP)</SelectItem>
                                                        <SelectItem value="LLM">Large Language Models (LLMs)</SelectItem>
                                                        <SelectLabel>Website</SelectLabel>
                                                        <SelectItem value="Integrating_ML">Integrating ML into Websites</SelectItem>
                                                        <SelectItem value="Deploy">Deploy ML Model</SelectItem>
                                                        <SelectItem value="Website_Design">Website Design</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormItem className="h-full">
                                        <FormLabel>
                                            <Label htmlFor="message" className="text-sm font-semibold text-gray-700 block mb-1">
                                                Your Message
                                            </Label>
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Type your message here."
                                                className="min-h-[260px] py-3 px-4 text-gray-800 bg-white border-gray-300 resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex justify-end">
                            <Button
                                disabled={activeState}
                                className="bg-orange text-white hover:bg-orange/90 px-6 py-3"
                                type="submit"
                            >
                                <Loader2 className={`mr-2 h-4 w-4 animate-spin ${loading}`} />
                                Send Message
                            </Button>
                        </motion.div>
                    </form>
                </Form>
            </div>
        </motion.section>
    );
}

export default Contact;