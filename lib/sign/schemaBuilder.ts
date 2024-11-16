import { SignProtocolClient, SpMode, EvmChains, type Schema } from "@ethsign/sp-sdk";
import type { WalletClient } from "viem";

const RESOLVER = "0x2e64c9D5007Ab5E6bA6a65F04708d5ae949B8573";

export const createUserSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse User',
        description: 'Schema for Foodiverse users',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "createdAt", type: "string" },
            { name: "updatedAt", type: "string" },
        ],
    };

    return await client.createSchema(schema);
};

export const createMerchantSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse Merchant',
        description: 'Schema for Foodiverse merchants',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "address", type: "string" },
            { name: "ensName", type: "string" },
            { name: "createdAt", type: "string" },
            { name: "updatedAt", type: "string" },
        ],
    };

    return await client.createSchema(schema);
};

export const createRestaurantSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse Restaurant',
        description: 'Schema for Foodiverse restaurants',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "ensName", type: "string" },
            { name: "paymentAddress", type: "string" },
            { name: "createdAt", type: "string" },
            { name: "updatedAt", type: "string" },
            { name: "merchantId", type: "string" },
        ],
    };

    return await client.createSchema(schema);
};

export const createMenuSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse Menu',
        description: 'Schema for Foodiverse menus',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "menuType", type: "string" },
            { name: "startDate", type: "string" },
            { name: "endDate", type: "string" },
            { name: "createdAt", type: "string" },
            { name: "updatedAt", type: "string" },
            { name: "restaurantId", type: "string" },
        ],
    };

    return await client.createSchema(schema);
};

export const createMenuItemSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse MenuItem',
        description: 'Schema for Foodiverse menu items',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "name", type: "string" },
            { name: "price", type: "uint256" },
            { name: "isAvailable", type: "bool" },
            { name: "createdAt", type: "string" },
            { name: "updatedAt", type: "string" },
            { name: "menuId", type: "string" },
        ],
    };

    return await client.createSchema(schema);
};

export const createOrderSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse Order',
        description: 'Schema for Foodiverse orders',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "status", type: "string" },
            { name: "createdAt", type: "string" },
            { name: "updatedAt", type: "string" },
            { name: "restaurantId", type: "string" },
        ],
    };

    return await client.createSchema(schema);
};

export const createOrderItemSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse OrderItem',
        description: 'Schema for Foodiverse order items',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "orderId", type: "string" },
            { name: "menuItemId", type: "string" },
            { name: "quantity", type: "uint256" },
            { name: "notes", type: "string" },
        ],
    };

    return await client.createSchema(schema);
};

export const createPaymentSchema = async (walletClient: WalletClient) => {
    const client = new SignProtocolClient(SpMode.OnChain, {
        chain: EvmChains.baseSepolia,
        walletClient,
    });

    const schema: Schema = {
        name: 'Foodiverse Payment',
        description: 'Schema for Foodiverse payments',
        resolver: RESOLVER,
        data: [
            { name: "id", type: "string" },
            { name: "orderId", type: "string" },
            { name: "transactionHash", type: "string" },
            { name: "amount", type: "uint256" },
            { name: "currency", type: "string" },
            { name: "paymentStatus", type: "string" },
            { name: "paymentTime", type: "string" },
        ],
    };

    return await client.createSchema(schema);
}; 