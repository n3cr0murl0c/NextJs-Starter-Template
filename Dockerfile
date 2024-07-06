
############################          INSTALL STAGE             ##################################
# FROM oven/bun:alpine AS base
FROM imbios/bun-node:1.1-20.12.2-alpine AS install-dependecies-stage
#Use this options when running on aws t2.micro/nano or anything with vCPU=1 and RAM<=2GBs
#it will take longer but it wont freeze
ENV NODE_OPTIONS --max-old-space-size=512
ENV NODE_OPTIONS --max_semi_space_size=128
WORKDIR /app/website
COPY package.json .
COPY bun.lockb .
RUN bun install 
###########################            BUILD STAGE        ##################################
FROM install-dependecies-stage AS build-compile-stage
#Use this options when running on aws t2.micro/nano or anything with vCPU=1 and RAM<=2GBs
#it will take longer but it wont freeze
ENV NODE_OPTIONS --max-old-space-size=512
ENV NODE_OPTIONS --max_semi_space_size=128
WORKDIR /app/website
COPY . .
COPY --from=install-dependecies-stage /app/website/node_modules ./node_modules
RUN \
if [ -f bun.lockb ]; then bun run build; \
elif [ -f yarn.lock ]; then yarn run build; \
elif [ -f package-lock.json ]; then yarn run build; \
elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
elif [ -f package.json ]; then yarn run build; \
else echo "Lockfile not found." && exit 1; \
fi
###############################       PRODUCTION STAGE      #################################
FROM node:21.7.1-alpine AS production-stage
WORKDIR /app/website
#Use this options when running on aws t2.micro/nano or anything with vCPU=1 and RAM<=2GBs
#it will take longer but it wont freeze
ENV NODE_OPTIONS --max-old-space-size=512
ENV NODE_OPTIONS --max_semi_space_size=128
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
#Change your timezone
#ENV TZ="America/New_York"
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=build-compile-stage /app/website/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build-compile-stage --chown=nextjs:nodejs /app/website/.next/standalone ./
COPY --from=build-compile-stage --chown=nextjs:nodejs /app/website/.next/static ./.next/static

USER nextjs

EXPOSE 8000

ENV PORT 8000

CMD HOSTNAME="0.0.0.0" node server.js

##########################################################################
