import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// 搜索结果类型
export interface SearchResult {
    title: string;
    url: string;
    snippet: string;
}

// AI响应类型
export interface AIResponse {
    content: string;
    searchResults?: SearchResult[];
    usedWebSearch?: boolean;
}

export class AIRequest {
    @ApiProperty({
        description: 'The prompt text to generate a response for',
        example: 'Tell me about artificial intelligence'
    })
    @IsNotEmpty({ message: 'Prompt cannot be empty' })
    @IsString({ message: 'Prompt must be a string' })
    prompt: string;

    @ApiProperty({
        description: 'Optional AI model to use',
        required: false
    })
    @IsOptional()
    @IsString({ message: 'Model must be a string' })
    model?: string;

    @ApiProperty({
        description: 'System role prompt for the AI',
        example: 'You are a helpful assistant',
        required: false
    })
    @IsOptional()
    @IsString({ message: 'Role prompt must be a string' })
    rolePrompt?: string;

    @ApiProperty({
        description: 'Enable web search for real-time information (enabled by default)',
        example: false,
        required: false,
        default: true
    })
    @IsOptional()
    enableWebSearch?: boolean;

    @ApiProperty({
        description: 'Description of when to use web search',
        example: 'Search for current events, latest news, or real-time information',
        required: false
    })
    @IsOptional()
    @IsString({ message: 'Search description must be a string' })
    searchDescription?: string;
}