+++
date = '2026-05-02T14:38:24+07:00'
draft = false
title = 'Setting Up Audio in Linux'
+++
> this is a basic explanation on linux audio stack. refer to archlinux wiki for more info

audio in linux is somewhat confusing to me. i tried to follow what the arch wiki told me to do, but i didnt understand what i was doing. why do i need to install 3 different package for pipewire? what is alsa? is pipewire-pulse different than pulseaudio? these are the question i had, so i spent my weekend learning about linux audio. here is what i learned:

## alsa
this is an audio driver. it sits on the kernel, and based on what i read, this is the only way to output an audio to a speaker. you can make program that directly output sound to alsa by using its user space api, but the limitation of alsa is that it can only output 1 sound at a time. so you need another program that can combine multiple audio, and then send it to alsa.

## pulseaudio
for most people (old), the program is pulseaudio. pulseaudio is an audio server; it acts as a mixer that combine audio source from multiple application.

this is good thing, now we can listen to discord voice chat and youtube video at the same time. but the problem is what if an app still uses alsa to output sound? 

### pulseaudio-alsa
this is the reason why pulseaudio have another package called pulseaudio-alsa. what this do is that it reroute every app audio that uses alsa directly to pulseaudio server. so whether the app use alsa or pulse, every audio will ends up in pulseaudio server.

## pipewire
now we live in modern times. people think that pulseaudio is too basic and have problem (im not audio guy, idk the detail about any of this), so they make a new audio server called pipewire.

pipewire offers advanced audio programming capability than pulseaudio, but most apps hasn't adopted pipewire, so we need compatibility layer. similar to pulseaudio having pulseaudio-alsa, we have pipewire-pulse and pipewire-alsa.

### pipewire-pulse
this is compatibility layer for pulseaudio. it listen on pulseaudio socket, but uses pipewire as the backend. every apps that talks to pulseaudio socket will be received by this server, which is actually a pipewire server.

## summary
linux audio is actually simple. it consist of alsa as the main driver, and an audio server (pulseaudio or pipewire) that handle multiple audio source.  
if you choose to use pipewire, you need to also install pipewire-pulse and pipewire-alsa for compatibility with most program. 
