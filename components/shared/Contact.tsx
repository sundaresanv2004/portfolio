"use client";
import { Loader2 } from "lucide-react"
import styles from "@/app/styles";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {Button} from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select"
import {
    Form, FormControl, FormField, FormItem, FormLabel
} from "@/components/ui/form"
import { z } from "zod"
import {useForm} from "react-hook-form";
import { useState } from "react";


const formSchema = z.object({
    name: z.string(),
    email: z.string(),
    work: z.string(),
    message: z.string(),
})

const Contact = () => {
    const { toast } = useToast()
    const [activeState, setActiveState] = useState(false);
    const [loading, setLoading] = useState("hidden");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
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
                name: values.name,
                email: values.email,
                work: values.work,
                message: values.message
            }),
        });
        toast( {
            variant: "destructive",
            title: "Something Went Wrong",
            description: "We apologize, but there was an issue processing your request. Please try again later or contact support for assistance.",
        })
        const result = await response.json();
        if (result.success) {
            toast( {
                className: "bg-green-300 text-black",
                title: "Message Sent Successfully!",
                description: "Thank you for reaching out! Your message has been successfully sent. I will be in touch with you soon.",
            })
            form.reset()
        } else {
            toast( {
                variant: "destructive",
                title: "Something Went Wrong",
                description: "We apologize, but there was an issue processing your request. Please try again later or contact support for assistance.",
            })
        }
        setActiveState(false);
        setLoading("hidden")
    }

    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-6`}>
                <div>
                    <h1 className="text-start text-6xl font-Space font-semibold text-black mb-2 max-sm:text-5xl">Let&apos;s Talk</h1>
                    <p className="text-slate-500 font-bold text-md">Be it anything, I&apos;m always open to discuss new ideas and projects.</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <div className="w-full mt-6 grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div className="space-y-4 w-full">
                                <div className="grid w-full items-center gap-1.5 text-black">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <Label
                                                        htmlFor="name"
                                                        className="text-sm leading-none font-semibold">
                                                        Name
                                                        <span className="pl-1 -mt-1">*</span>
                                                    </Label>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input type="text" id="name" placeholder="Name"
                                                           className="py-6 mt-1 w-full" required={true} {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid w-full items-center gap-1.5 text-black">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <Label
                                                        htmlFor="email"
                                                        className="text-sm leading-none font-semibold">
                                                        Email
                                                        <span className="pl-1 -mt-1">*</span>
                                                    </Label>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input type="email" id="email" placeholder="Email"
                                                           className="py-6 mt-1 w-full" required={true} {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid w-full items-center gap-1.5 text-black">
                                    <FormField
                                        control={form.control}
                                        name="work"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <Label
                                                        htmlFor="work"
                                                        className="text-sm leading-none font-semibold">
                                                        What are you looking for?
                                                        <span className="pl-1 -mt-1">*</span>
                                                    </Label>
                                                </FormLabel>
                                                    <Select required={true} defaultValue={field.value} onValueChange={field.onChange}>
                                                        <FormControl>
                                                            <SelectTrigger className="py-6 mt-1">
                                                                <SelectValue placeholder="Select what your looking for?" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="bg-white">
                                                            <SelectGroup className="bg-white ring-white text-black">
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
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="w-full h-60 mb-10">
                                <div className="w-full gap-1.5 text-black h-60">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <Label
                                                        htmlFor="name"
                                                        className="text-sm leading-none font-semibold">
                                                        Your Message
                                                        <span className="pl-1 -mt-1">*</span>
                                                    </Label>
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Type your message here."
                                                        className="mt-1 h-60" required={true}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full justify-end items-center">
                            <Button
                                disabled={activeState}
                                className="bg-[#171717] text-[#FAFAFA] hover:bg-muted"
                                type="submit"
                            >
                                <Loader2 className={`mr-2 h-4 w-4 animate-spin ${loading}`} />
                                Send</Button>
                        </div>

                    </form>
                </Form>

            </div>
        </section>
    );
}

export default Contact;
