import IORedis, { Redis } from 'ioredis';
import type {QueueOptions } from 'bullmq';
import {Queue} from "bullmq";
import { Worker } from 'bullmq';
import type { WorkerOptions, Processor } from 'bullmq';
import type { RedisConfig } from './types';

export function createRedisConnection(config: RedisConfig): Redis {
	return new IORedis({
		host: config.host,
		port: config.port,
		password: config.password,
		tls: config.tls ? {} : undefined,
		maxRetriesPerRequest: null,
	});
}

export function createQueue(name: string, redisConfig: RedisConfig, opts?: Partial<QueueOptions>) {
	const connection = createRedisConnection(redisConfig);
	return new Queue(name, { connection, ...opts });
}

export function createWorker(
	name: string,
	processor: Processor,
	redisConfig: RedisConfig,
	opts?: Partial<WorkerOptions>
) {
	const connection = createRedisConnection(redisConfig);
	return new Worker(name, processor, { connection, concurrency: 5, ...opts });
}
